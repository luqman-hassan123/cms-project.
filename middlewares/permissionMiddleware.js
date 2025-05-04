const AssignRolesToUser = require("../models/assignRolesToUser");
const AssignPermissionToRoles = require("../models/assignPermissionToRole");
const UserRole = require("../models/userRole");
const Permission = require("../models/permission");

const permissionMiddleware = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.userId;
      // Fetch user's roles along with their permissions in one query
      const roles = await AssignRolesToUser.findAll({
        where: { userId },
        include: [
          {
            model: UserRole,
            include: [
              {
                model: AssignPermissionToRoles,
                include: [{ model: Permission }],
              },
            ],
          },
        ],
      });
      if (!roles.length) {
        return res.status(403).json({ message: "Access denied. No role assigned." });
      }
      // Check if any role has the required permission
      const hasPermission = roles.some((role) =>
        role.UserRole.AssignPermissionToRoles.some(
          (perm) => perm.Permission.permissionName === requiredPermission
        )
      );
      if (!hasPermission) {
        return res.status(403).json({ message: "Access denied. Insufficient permissions." });
      }
      next(); // Proceed if permission is found
    } catch (error) {
      console.error("Permission Middleware Error:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  };
};

module.exports = permissionMiddleware;

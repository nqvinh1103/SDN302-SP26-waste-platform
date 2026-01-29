export const PRIVILEGES = {
  // Citizen Management
  VIEW_CITIZEN_AREA: "ViewCitizenArea",
  VIEW_CITIZEN_PROFILE: "ViewCitizenProfile",

  // User Management
  VIEW_USER: "ViewUser",
  CREATE_USER: "CreateUser",
  MODIFY_USER: "ModifyUser",
  DELETE_USER: "DeleteUser",
  CHANGE_PASSWORD: "ChangePassword",

  // Role & Privilege Management
  VIEW_ROLE: "ViewRole",
  CREATE_ROLE: "CreateRole",
  UPDATE_ROLE: "UpdateRole",
  DELETE_ROLE: "DeleteRole",
  VIEW_PRIVILEGE: "ViewPrivilege",
  CREATE_PRIVILEGE: "CreatePrivilege",
  UPDATE_PRIVILEGE: "UpdatePrivilege",
  DELETE_PRIVILEGE: "DeletePrivilege",

  // Collection Management
  VIEW_MY_COLLECTION_TASK: "ViewMyCollectionTask",
  CREATE_COLLECTION_ASSIGNMENT: "CreateCollectionAssignment",
  VIEW_COLLECTION_REPORT: "ViewCollectionReport",
  CREATE_COLLECTION_REPORT: "CreateCollectionReport",
  SUBMIT_PROOF: "SubmitProof",

  // Enterprise/Collector
  VIEW_ENTERPRISE: "ViewEnterprise",
  VIEW_COLLECTOR_PROFILE: "ViewCollectorProfile",
  CREATE_MEMBER: "CreateMember",

  // Capacity & Waste Management
  CREATE_CAPACITY: "CreateCapacity",
  VIEW_WASTE_TYPE: "ViewWasteType",

  // Reports & Complaints
  CREATE_COMPLAINT_REPORT: "CreateComplaintReport",

  // Rewards
  CREATE_REWARD_POLICY: "CreateRewardPolicy",

  // Special
  READ_ONLY: "ReadOnly",
} as const

export type Privilege = typeof PRIVILEGES[keyof typeof PRIVILEGES]

export const PRIVILEGE_GROUPS = {
  USER_MANAGEMENT: [
    PRIVILEGES.VIEW_USER,
    PRIVILEGES.CREATE_USER,
    PRIVILEGES.MODIFY_USER,
    PRIVILEGES.DELETE_USER,
  ],
  ROLE_MANAGEMENT: [
    PRIVILEGES.VIEW_ROLE,
    PRIVILEGES.CREATE_ROLE,
    PRIVILEGES.UPDATE_ROLE,
    PRIVILEGES.DELETE_ROLE,
  ],
  COLLECTION: [
    PRIVILEGES.VIEW_MY_COLLECTION_TASK,
    PRIVILEGES.CREATE_COLLECTION_ASSIGNMENT,
    PRIVILEGES.VIEW_COLLECTION_REPORT,
    PRIVILEGES.CREATE_COLLECTION_REPORT,
  ],
} as const

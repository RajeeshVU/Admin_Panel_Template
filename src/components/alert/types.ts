 export default function determineMessageType(value: any): string {
    switch (value) {
      case "success":
        return "success";
      case "error":
        return "error";
      case "connection_failed":
        return "connectivity";
        case "alert":
          return "alert";
      default:
        return "alert";
    }
  }
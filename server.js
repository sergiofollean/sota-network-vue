// import { Server, Response } from "miragejs";
// export function makeServer({ environment = "development" } = {}) {
//   let server = new Server({
//     environment,

//     seeds(server) {
//       server.db.loadData({
//         chatList: [
//           {
//             active: true,
//             title: "William Wills",
//             avatar: require("@/assets/images/faces/3.jpg"),
//             chats: [
//               {
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”",
//                 time: "25 min ago"
//               },
//               {
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”",
//                 time: "1 min ago"
//               },
//               {
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”",
//                 time: "5 min ago"
//               }
//             ]
//           },
//           {
//             active: true,
//             title: "Jaqueline Day",
//             avatar: require("@/assets/images/faces/4.jpg"),
//             chats: [
//               {
//                 text: "Do you ever find yourself falling into the (Two)",
//                 time: "25 min ago"
//               },
//               {
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”",
//                 time: "1 min ago"
//               },
//               {
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”",
//                 time: "5 min ago"
//               }
//             ]
//           },
//           {
//             active: false,
//             title: "Jhone Will",
//             avatar: require("@/assets/images/faces/5.jpg")
//           },
//           {
//             active: true,
//             title: "Timothy Clarkson",
//             avatar: require("@/assets/images/faces/1.jpg")
//           }
//         ],
//         chatInfo: [
//           {
//             id: 1,
//             chats: [
//               {
//                 title: "William Wills",
//                 avatar: require("@/assets/images/faces/3.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?” one",
//                 time: "25 min ago"
//               },
//               {
//                 title: "William Wills",
//                 avatar: require("@/assets/images/faces/3.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?” two",
//                 time: "1 min ago"
//               },
//               {
//                 title: "William Wills",
//                 avatar: require("@/assets/images/faces/3.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?” three",
//                 time: "5 min ago"
//               }
//             ]
//           },
//           {
//             id: 2,
//             chats: [
//               {
//                 title: "Jaqueline Day",
//                 avatar: require("@/assets/images/faces/4.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Jaqueline Day",
//                 avatar: require("@/assets/images/faces/4.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Jaqueline Day",
//                 avatar: require("@/assets/images/faces/4.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               }
//             ]
//           },
//           {
//             id: 3,
//             chats: [
//               {
//                 title: "Jhone Will",
//                 avatar: require("@/assets/images/faces/5.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Jhone Will",
//                 avatar: require("@/assets/images/faces/5.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Jhone Will",
//                 avatar: require("@/assets/images/faces/5.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               }
//             ]
//           },
//           {
//             id: 4,
//             chats: [
//               {
//                 title: "Timothy Clarkson",
//                 avatar: require("@/assets/images/faces/1.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Timothy Clarkson",
//                 avatar: require("@/assets/images/faces/1.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               },
//               {
//                 title: "Timothy Clarkson",
//                 avatar: require("@/assets/images/faces/1.jpg"),
//                 text:
//                   "Do you ever find yourself falling into the “discount trap?”"
//               }
//             ]
//           }
//         ],
//         notes: [
//           {
//             title: "Meeting With Kelly",
//             date: "11/05/2020",
//             text:
//               "Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",
//             cardColor: "info",
//             trashColor: "info",
//             settingsColor: "info",
//             dividerColor: "info"
//           },
//           {
//             title: "Meeting With Jhon",
//             date: "11/05/2020",
//             text:
//               "Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",
//             cardColor: "primary",
//             trashColor: "primary",
//             settingsColor: "primary",
//             dividerColor: "primary"
//           },
//           {
//             title: "Meeting With Dave",
//             date: "11/05/2020",
//             text:
//               "Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",
//             cardColor: "success",
//             trashColor: "success",
//             settingsColor: "success",
//             dividerColor: "success"
//           },
//           {
//             title: "Meeting With Dave",
//             date: "11/05/2020",
//             text:
//               "Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.",
//             cardColor: "pink",
//             trashColor: "pink",
//             settingsColor: "pink",
//             dividerColor: "pink"
//           }
//         ],
//         todos: [
//           {
//             text: "Hello Todo Welcome",
//             badge: ["Frontend", "Design"],
//             taskName: "Hello taskname",
//             image: require("@/assets/images/avatars/001-man.svg"),
//             isCompleted: false
//           },
//           {
//             text: "Hello Todo Welcome Second Version",
//             badge: ["Frontend"],
//             taskName: "Hello taskname two",
//             image: require("@/assets/images/avatars/004-bald.svg"),
//             isCompleted: false
//           },
//           {
//             text: "Hello Todo Welcome",
//             badge: ["Frontend", "Design"],
//             taskName: "Hello taskname",
//             image: require("@/assets/images/avatars/006-woman-1.svg"),
//             isCompleted: false
//           },
//           {
//             text: "Hello Todo Welcome Second Version",
//             badge: ["Frontend"],
//             taskName: "Hello taskname two",
//             image: require("@/assets/images/avatars/001-man.svg"),
//             isCompleted: false
//           },
//           {
//             text: "Hello Todo Welcome",
//             badge: ["Frontend", "Design"],
//             taskName: "Hello taskname",
//             image: require("@/assets/images/avatars/002-woman.svg"),
//             isCompleted: false
//           },
//           {
//             text: "Hello Todo Welcome Second Version",
//             badge: ["Frontend"],
//             taskName: "Hello taskname two",
//             image: require("@/assets/images/avatars/003-man-1.svg"),
//             isCompleted: false
//           }
//         ]
//       });
//     },
//     routes() {
//       this.timing = 50;
//       this.namespace = "api";

//       this.get("/chatList", schema => {
//         return schema.db.chatList;
//       });

//       this.post("/chatList", (schema, request) => {
//         const chat = JSON.parse(request.requestBody).data;
//         return chat;
//       });

//       this.post("/chatInfo", (schema, request) => {
//         const chat = JSON.parse(request.requestBody).data;
//         return chat;
//       });
//       this.get("/chatInfo", schema => {
//         return this.schema.db.chatInfo;
//       });

//       this.get("/chatInfo/:id", (schema, request) => {
//         let id = request.params.id;
//         return schema.db.chatInfo.find(id);
//       });

//       // notes
//       this.get("/notes", schema => {
//         return schema.db.notes;
//       });

//       this.post("/notes", (schema, request) => {
//         // console.log(request);
//         const title = JSON.parse(request.requestBody).data;
//         const text = JSON.parse(request.requestBody).dataTwo;
//         const color = JSON.parse(request.requestBody).color;

//         return schema.db.notes.insert({
//           title: title,
//           text: text,
//           color: color
//         });
//       });
//       this.delete("/notes/:id", (schema, request) => {
//         // console.log(request);

//         return schema.db.notes.remove(request.params.id);
//       });

//       // todos
//       this.get("/todos", schema => {
//         return schema.db.todos;
//       });
//       this.post("/todos", (schema, request) => {
//         const todo = JSON.parse(request.requestBody).data;
//         //
//         // console.log(todo);
//         return schema.db.todos.insert(todo);
//       });
//       this.patch("/todos/:id", (schema, request) => {
//         let todo = JSON.parse(request.requestBody).data;

//         return schema.db.todos.update(todo.id, todo);
//       });
//       this.delete("/todos/:id", (schema, request) => {
//         // console.log(todo);
//         return schema.db.todos.remove(request.params.id);
//       });
//     }
//   });
//   return server;
// }

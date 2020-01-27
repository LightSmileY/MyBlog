const serverUrl = 'https://fengblog.xyz:3029'

export {
  serverUrl
}


// {
//   post: {
//     pid: Number,
//     userId: Number,     /*发帖的人*/
//     avatarUrl: "",
//     nikName: "",
//     postTime: "",
//     type: "",
//     style: "",
//     body: "",
//     commodityUrl: "",
//     images: [{
//       uid: "",
//       pid: "",
//       image: ""
//     }],
//     video: {
//       uid: "",
//       pid: "",
//       image: ""
//     },
//     forward:{
//       uid: "",
//       username: "",
//       postTime: "",
//       pid: "",
//       postTitle: ""
//     },
//     isAttent: Boolean,
//     isLike: Boolean,
//     isCollect: Boolean,
//     likeCount: Number,
//     collectionCount: Number,
//     commentCount: Number,
//     forwardCount: Number,
//     comments: [
//       {
//         userId: Number,     /*评论帖子的人*/
//         nickName: "",
//         objectId: "",       /*评论的对象*/
//         objectNickName: "", /*若对象是作者，前端显示XXX评论了你*/
//         content: ""         若果对象是另外的评论者，前端显XXX回复XXX
//       }                    
//     ]
//   }
// }


//   post: {
//     pid: Number,
//     userId: Number,     /*发帖的人*/
//     avatarUrl: "",
//     nikName: "",
//     postTime: "",
//     type: "",
//     style: "",
//     body: "",
//     commodityUrl: "",
//     images: [],
//     video: {},
//     forward:{},
//     isAttent: Boolean,
//     isLike: Boolean,
//     isCollect: Boolean,
//     likeCount: Number,
//     collectionCount: Number,
//     commentCount: Number,
//     forwardCount: Number,
//     comments: []
//   }

// images: {
//   uid: "",
//   pid: "",
//   image: ""
// }
// b  nh  
// video: {
//   uid: "",
//   pid: "",
//   image: ""
// }

// forward:{
//   uid: "",
//   username: "",
//   postTime: "",
//   pid: "",
//   postTitle: ""
// }

// comments: {
//   userId: Number,     /*评论帖子的人*/
//   nickName: "",
//   objectId: "",       /*评论的对象*/
//   objectNickName: "", /*若对象是作者，前端显示XXX评论了你*/
//   content: ""         /*若果对象是另外的评论者，前端显XXX回复XXX*/
// }

// {
//   pid: Number,
//   type: "",
//   style: "",
//   uid: Number,     /*发帖的人*/
//   avatarUrl: "",
//   nickName: "",
//   postTime: "",
//   images: [""],
//   video: "",
//   body: "",
//   forward:{
//     uid: "",       //原帖作者
//     nickName: "",  //原帖作者昵称
//     avatarUrl: "",
//     postTime: "",  //原帖发表时间
//     pid: "",       //原帖id
//     postTitle: "", //原帖标题
//     body: ""
//   }
//   isAttent: Boolean,
//   isLike: Boolean,
//   isCollect: Boolean,
//   likeCount: Number,
//   collectionCount: Number,
//   commentCount: Number,
//   forwardCount: Number,
//   comments: [
//     {
//       userId: Number,     /*评论帖子的人*/
//       nickName: "",
//       objectId: "",       /*评论的对象*/
//       objectNickName: "", /*若对象是作者，前端显示XXX评论了你*/
//       content: ""         /*若果对象是另外的评论者，前端显XXX回复XXX*/
//     }                    
//   ]
//   fpid: "",
// }
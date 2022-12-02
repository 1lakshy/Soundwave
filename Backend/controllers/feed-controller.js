const FeedModels = require("../models/feed-models")



class FeedController {
  async sendFeed(req, res) {
    try {
      const { feedText, feedImage, feedVideo ,name ,email } = res.body;

      // if(!feedImage || !feedVideo ){
        
      // }
   
      const newFeed = {
        email:email,
        name: name,
        feedText: feedText,
        feedImage: feedImage,
        feedVideo: feedVideo,
      }; 

      const feed = await FeedModels.create(newFeed);
      
      res.json({ feed : feed})
    
    } catch (err) {}
  }
}

require_relative "environment.rb"
user = User.new("Portus")
user2 = User.new("BigDave55")

tweet = user.post_tweet("New tweet!")

user.like_tweet(tweet)
user2.like_tweet(tweet)

binding.pry
0

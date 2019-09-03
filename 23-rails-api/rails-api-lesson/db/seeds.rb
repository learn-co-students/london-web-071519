Post.destroy_all

posts = [
  {content: 'hello world', user_name: 'daniel'},
  {content: 'hello asdf', user_name: 'ben'},
  {content: 'hello 13', user_name: 'lucy'},
  {content: 'hello 513', user_name: 'gabe'},
  {content: 'hello 1390', user_name: 'bob'},
]

Post.create posts

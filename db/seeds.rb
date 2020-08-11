# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@post1 = Post.create!(title: 'Snapchat Meme', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @admin)
puts "#{Post.count} posts created"

@comment1 = Comment.create!(text: "cool meme man", user: @admin, post: @post1)
puts "#{Comment.count} comments created"


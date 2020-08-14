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
@user1 = User.create!(username: 'user1', email: 'user1@email.com', password: '123456')


puts "#{User.count} users created"

@post1 = Post.create!(title: 'Snapchat Meme', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @admin)
@post2 = Post.create!(title: 'Snapchat Meme2', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @admin)

@post3 = Post.create!(title: 'Snapchat Meme3', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @user1)
@post4 = Post.create!(title: 'Snapchat Meme4', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @user1)



puts "#{Post.count} posts created"

@comment1 = Comment.create!(text: "cool meme man", user: @admin, post: @post1)
@comment2 = Comment.create!(text: "cool meme man2", user: @admin, post: @post2)

@comment3 = Comment.create!(text: "cool meme man3", user: @admin, post: @post3)
@comment4 = Comment.create!(text: "cool meme man4", user: @admin, post: @post4)



puts "#{Comment.count} comments created"


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

@post1 = Post.create!(title: 'Meme1', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @admin)
@post2 = Post.create!(title: 'Meme2', img_url: 'https://i.imgur.com/Cw7KIM1.jpg', user: @admin)

@post3 = Post.create!(title: 'Meme3', img_url: 'https://i.redd.it/5vvpn6tlghw41.jpg', user: @user1)
@post4 = Post.create!(title: 'Meme4', img_url: 'https://i.redd.it/2ry044pdv2141.jpg', user: @user1)


@post5 = Post.create!(title: 'Meme5', img_url: 'https://i.redd.it/th44b0a1dn041.jpg', user: @admin)
@post6 = Post.create!(title: 'Meme6', img_url: 'https://i.redd.it/o1gnotfxi4k01.png', user: @admin)
@post7 = Post.create!(title: 'Meme7', img_url: 'https://i.redd.it/x6snxvaykg301.jpg', user: @admin)
@post8 = Post.create!(title: 'Meme8', img_url: 'https://i.redd.it/s0nb3l5tb8a51.png', user: @admin)
@post9 = Post.create!(title: 'Meme9', img_url: 'https://i.redd.it/tgulxj3ou7p41.jpg', user: @admin)
@post10 = Post.create!(title: 'Meme10', img_url: 'https://i.redd.it/jd25yqv8xsf31.jpg', user: @admin)
@post11 = Post.create!(title: 'Meme11', img_url: 'https://i.redd.it/rh977vd6pvb41.jpg', user: @admin)
@post12 = Post.create!(title: 'Meme12', img_url: 'https://i.redd.it/08sz26e91k841.jpg', user: @admin)



puts "#{Post.count} posts created"

@comment1 = Comment.create!(text: "cool meme man", user: @admin, post: @post1)
@comment2 = Comment.create!(text: "cool meme man2", user: @admin, post: @post2)

@comment3 = Comment.create!(text: "cool meme man3", user: @admin, post: @post3)
@comment4 = Comment.create!(text: "cool meme man4", user: @admin, post: @post4)



puts "#{Comment.count} comments created"


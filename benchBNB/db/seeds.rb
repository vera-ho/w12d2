# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.destroy_all
b1 = Bench.create( lat: 37.7808852, lng: -122.4149743, description: "King Street")
b2 = Bench.create( lat: 37.776306, lng: -122.4166909, description: "Iza Ramen")
b3 = Bench.create( lat: 37.7947123, lng: -122.4339447, description: "Bestest Bench")
b4 = Bench.create( lat: 37.7651763, lng: -122.4559978, description: "Kooper's Bench")
b5 = Bench.create( lat: 37.7618391, lng: -122.4229556, description: "The Benches Garden")

User.destroy_all
u1 = User.create( username: "user0", password: "password")
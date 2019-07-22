require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

m1 = Movies.new('Top Gun')
m2 = Movies.new('Lion King')
m3 = Movies.new('Midsummer')

c1 = Characters.new('Maverick')
c2 = Characters.new('Simba')
c3 = Characters.new('Person 1')

a1 = Actors.new('Tom Cruise')
a2 = Actors.new('Donald Glover')
a3 = Actors.new('Actor 1')

s1 = Shows.new('GOT')
s2 = Shows.new('Stranger Things')
s3 = Shows.new('Atlanta')
s4 = Shows.new('Lion King')

Pry.start

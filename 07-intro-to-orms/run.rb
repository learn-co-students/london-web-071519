require 'sqlite3'
require 'pry'
# require "activerecord" << Tomorrow :)

require_relative './artist.rb'

DB = SQLite3::Database.new('music.db')
DB.results_as_hash = true

binding.pry
puts "Mischief managed!"

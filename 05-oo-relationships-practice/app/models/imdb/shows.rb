class Shows
    attr_accessor :characters, :title
    @@all = []

    def initialize(title)
        @title = title
        @characters = []
        @@all << self
    end

    def self.all
        @@all
    end

    def self.on_the_big_screen
        # should return TV shows that share the same name as a movie
        result = []
        Movies.all.each do |movie|
            result = self.all.select {|show| show.title == movie.title}.first
        end
        result
    end
end
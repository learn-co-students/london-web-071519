class Movies
    # has_many characters
    # has_many actors through characters

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

    def self.most_actors
        # should return the movie which has the most actors in it. this is so the studio knows never to hire that director again because he/she makes expensive movies

        # self.all.inject {|acc, movie| acc.characters.count}

        Movies.all.inject {|acc, movie| acc.characters.count > movie.characters.count ? acc : movie}
    end
end
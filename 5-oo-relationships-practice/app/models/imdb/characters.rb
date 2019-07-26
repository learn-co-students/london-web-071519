class Characters
    # has many movies and shows

    attr_accessor :actor, :name, :movies, :shows
    @@all = []

    def initialize(name)
        @name = name
        @actor = nil
        @movies = []
        @shows = []
        @@all << self
    end

    def self.all
        @@all
    end

    def self.most_appearances
        # should return which character of film/television appears in the most films or tv shows
        @@all.inject {|acc, character| acc.movies.count + acc.shows.count > character.movies.count + character.shows.count ? acc : character}
    end
end
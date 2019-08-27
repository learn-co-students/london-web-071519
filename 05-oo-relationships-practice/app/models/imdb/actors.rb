class Actors
    attr_accessor :characters, :name
    @@all = []

    def initialize(name)
        @name = name
        @characters = []
        @@all << self
    end

    def self.all
        @@all
    end

    def self.most_characters
        #should return which actor has the most different characters played. (probably meryl streep)
        self.all.inject {|acc, actor| acc.characters.uniq.count > actor.characters.uniq.count ? acc : actor}
    end
end
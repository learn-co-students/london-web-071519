class Artist
  def initialize(id: nil, name:)
    @id = id
    @name = name
  end

  def self.all
    artist_hashes = DB.execute "select * from artists"
    parse_artists(artist_hashes)
  end

  def self.parse_artist(artist_hash)
    Artist.new(id: artist_hash["ArtistId"], name: artist_hash["Name"])
  end

  def self.parse_artists(artist_hashes)
    artist_hashes.map { |artist_hash| parse_artist(artist_hash) }
  end

  def greet
    "Hello, we are #{@name}!"
  end

  def self.find_by_name(name)
    artist_hash = DB.execute("select * from artists where name = ? limit 1", name)[0]
    if artist_hash != nil
      parse_artist(artist_hash)
    else
      "Artist not found!"
    end
  end

  def save
    DB.execute("INSERT INTO artists (name) VALUES (?)", @name)
  end

  def destroy
    DB.execute("DELETE FROM artists WHERE ArtistId = ?", @id)
  end

  def name=(new_name)
    @name = new_name
    DB.execute("UPDATE artists SET name = ? WHERE ArtistId = ?", new_name, @id)
  end
end

# Model: Artist <=> artists
# Song <=> songs
# <=> <<< ligatures

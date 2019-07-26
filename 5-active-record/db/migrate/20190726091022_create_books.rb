class CreateBooks < ActiveRecord::Migration[5.2] # The Migration class gives us access to methods that will allow us to change the structure of our database - creating, updating and deleting tables and their columns.
  def change # Every migration should contain a change method, within it, we define how we want our database to change.
    create_table :books do |t| # The create_table method takes the name of a table and then defines each column and its datatype.
      t.string :title
      t.string :description
      t.integer :page_count
    end
  end
end

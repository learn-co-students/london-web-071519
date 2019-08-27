class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_id, :integer # The add_column method takes the name of a table, the name of a new column to add to that table, and the datatype of the new column.
  end
end

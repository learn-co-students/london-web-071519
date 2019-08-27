class Book < ActiveRecord::Base # The Base class gives us access to methods that will give us full CRUD functionality, as well as other useful methods to allow us to query our database.
  belongs_to :author # This will give each instance of book a getter and setter method for the instance of author that book belongs to.

end

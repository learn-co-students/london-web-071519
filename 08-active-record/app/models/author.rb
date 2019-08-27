class Author < ActiveRecord::Base
  has_many :books # This will give each instance of author a method that will return every instance of book that belongs to it.

end

# Example of how to do a has many through relationship
# class Patient
#   has_many :appointments
#   has_many :doctors, through: :appointments
# end
#
# class Doctor
#   has_many :appointments
#   has_many :patients, through: :appointments
# end
#
# class Appointment
#   belongs_to :patient
#   belongs_to :doctor
# end

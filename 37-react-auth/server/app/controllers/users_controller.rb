class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])
    if user and user.authenticate(params[:password])
      render json: user
    else
      render json: { error: 'Username/password combination invalid' }, status: 401
    end
  end

  def validate
    
  end
end

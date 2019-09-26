class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])
    if user and user.authenticate(params[:password])
      render json: { username: user.username, token: issue_token({ id: user.id }) }
    else
      render json: { error: 'Username/password combination invalid' }, status: 401
    end
  end

  def validate
    user = get_current_user
    if user
      render json: { username: user.username, token: issue_token({ id: user.id })  }
    else
      render json: {error: 'Invalid token.'}, status: 401
    end
  end

  def inventory
    user = get_current_user
    if user
      render json: user.items
    else
      render json: {error: 'Invalid token.'}, status: 401
    end
  end
end

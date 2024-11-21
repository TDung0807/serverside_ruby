class UsersController < ApplicationController
    def create 
        @user = User.create(user_params)
        puts @user.as_json
        if @user.save
            render json:@user.as_json, status: :ok
        else
            render json:{message:"Error created", errors: @user.errors.full_messages}
        end
    end


    def index
        render json: {users: User.all.map(&:as_json)}
    end
    private
    def user_params
        params.required(:user).permit(:email, :password, :name, :username)
    end
end
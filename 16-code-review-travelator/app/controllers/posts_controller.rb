class PostsController < ApplicationController
    def new
        @post = Post.new
    end

    def like
        @post = Post.find(params[:id])
        @post.likes += 1
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            redirect_to post_path(@post)
        else
            render :new
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
    end
end

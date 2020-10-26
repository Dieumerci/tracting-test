class Api::V1::PostsController < Api::V1::BaseController

  def index
    respond_to do |format|
      format.json { render json: Post.all }
    end

  end

  def create
    post = Post.create(post_params)
    puts post.description
  end

  def parser_method(file_path)

  end

  private

  def post_params
    params.require(:post).permit(:description)
  end
end

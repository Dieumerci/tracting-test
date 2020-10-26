class Api::V1::PostsController < Api::V1::BaseController
  require 'csv'

  def index
    respond_to do |format|
      format.json { render json: Post.all }
    end

  end

  def create
    file_path = params[:file]
    file_parse(file_path)
    # post = Post.create(post_params)
    # puts post.description
  end

  private

  def post_params
    params.require(:post).permit(:description)
  end

  def file_parse(file_path)
    CSV.foreach(file_path, quote_char: '"', col_sep: ';', row_sep: :auto, headers: true) do |row|
      puts row[0]
      puts row['xxx']
    end
  end
end

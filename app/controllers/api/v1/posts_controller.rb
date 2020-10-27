class Api::V1::PostsController < Api::V1::BaseController
  require 'csv'

  def index
    respond_to do |format|
      format.json { render json: Post.all }
    end

  end

  def create
    file_path = params[:file]
    puts "file_path"
    # Location.distance_calculation(params[:file])
    # redirect_to root_url, notice: "Successfully Imported Data!!!"
  end

  private

  def post_params
    params.require(:post).permit(:description)
  end

  def file_parse(file)
    location = []
    CSV.foreach(file.path, headers: true, :header_converters => [:downcase]) do |row|
      puts row[0]
      puts row['xxx']
    end
  end
end

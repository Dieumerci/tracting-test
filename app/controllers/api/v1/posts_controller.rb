class Api::V1::PostsController < Api::V1::BaseController
  require 'csv'

  def index
    respond_to do |format|
      format.json { render json: Passenger.all }
    end
  end

  def create
    name = params[:file]
    file_extension = File.extname(name.original_filename)
    puts file_extension
    # Passenger.process_upload(params[:file])
    # redirect_to root_url, notice: "Successfully Imported Data!!!"
  end

  def calculate_and_group

  end


end

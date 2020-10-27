class Api::V1::PostsController < Api::V1::BaseController
  require 'csv'

  def index
    respond_to do |format|
      format.json { render json: Post.all }
    end

  end

  def create

    Passenger.process_upload(params[:file])
    redirect_to root_url, notice: "Successfully Imported Data!!!"
  end


end

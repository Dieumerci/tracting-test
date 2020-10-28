class Api::V1::PostsController < Api::V1::BaseController
  require 'csv'

  def index
    respond_to do |format|
      format.json { render json: Passenger.all }
    end
  end

  def create
    Passenger.process_upload(params[:file])
    redirect_to root_url, notice: "Successfully Imported Data!!!"
  end

  def calculate_and_group
  #  perform query function for grouping
  # Get all_passengers with rides within a radius of 0.15km from passenger.location(passenger)
  end


end

class HomeController < ApplicationController
  def index
    render json: Offer.all
  end

  def show 
    # require "pry"; binding.pry
    render json: Offer.find(home_params[:id])
  end

  private
    def home_params
      params.permit(:id)
    end
end

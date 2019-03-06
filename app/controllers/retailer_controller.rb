class RetailerController < ApplicationController
  def index
    render json: Retailer.all
  end

  def show 
    # require "pry"; binding.pry
    render json: Retailer.find(retailers_params[:id])
  end

  private
    def retailers_params
      params.permit(:id)
    end
end

class PagesController < ApplicationController

  before_action :redirect_index, only: [:index]

  def index
  end

  def help
  end
end

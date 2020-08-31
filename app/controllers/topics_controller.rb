class TopicsController < ApplicationController

  def index
    session[:order_param]   = order_param
    session[:search_params] = search_params

    @topics = Topic.get_list(search_params, order_param)
    @topics = @topics.page(params[:page]).per(5)
  end

  def new
    @topic = Topic.new
  end

  def create
    @topic = current_user.topics.new(topic_params)

    if @topic.save
      redirect_to topics_path, success: '投稿に成功しました'
    else
      flash.now[:danger] = "投稿に失敗しました"
      render :new
    end
  end

  private
  def topic_params
    params.require(:topic).permit(:image, :description, :title)
  end

  def order_param
    params[:order].present? ? params[:order] : session[:order_param]
  end

  def search_params
    params[:search].present? ? params[:search] : session[:search_params]
  end
end

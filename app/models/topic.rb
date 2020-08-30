class Topic < ApplicationRecord
  validates :user_id, presence: true
  validates :description, presence: true
  validates :image, presence: true

  belongs_to :user
  has_many :favorites
  has_many :favorite_users, through: :favorites, source: 'user'
  has_many :comments

  mount_uploader :image, ImageUploader

  def self.get_list(serch_params={}, order_param="new")
    topic = Topic.all.includes(:favorite_users)

    # 検索
    if serch_params.present?
      topic = topic.where(['title LIKE ?', "%#{serch_params[:title]}%"]) if serch_params[:title].present?
    end

    # ソート
    if order_param
      case order_param
      when "new"
        topic = topic.order(id: "DESC")
      when "old"
        topic = topic.order(id: "ASC")
      when "favolite"
        topic = topic.select('topics.*', 'count(favorites.id) AS favs').left_joins(:favorites).group('topics.id').order('favs desc')
      end
    end
    
    topic
  end
end

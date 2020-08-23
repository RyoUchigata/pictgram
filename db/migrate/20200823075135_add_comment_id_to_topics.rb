class AddCommentIdToTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :comment_id, :integer
  end
end

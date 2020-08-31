class CommentsController < ApplicationController

    def create
        @topic = Topic.find_by(id: comment_params[:topic_id])
        @comment = @topic.comments.build(comment_params)
        @comment.save
        
        # if comment.save
        #     redirect_to topics_path, success: 'コメントを追加しました'
        # else
        #     redirect_to topics_path, warning: 'コメントを追加に失敗しました'
        # end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :topic_id)
    end
end

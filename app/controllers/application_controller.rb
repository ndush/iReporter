class ApplicationController < ActionController::Base
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    include ActionController::Cookies 
    wrap_parameters format: []
    before_action :authorize
    
    private
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
      return render json: { errors: ["Not Logged In"] }, 
      status: :unauthorized unless session.include? :user_id
    end

    def fallback_index_html
      render :file => 'public/index.html'      
    end
    
end

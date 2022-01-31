class TasksController < ApplicationController
  # GET /tasks
  def index
    @tasks = Task.all

    render json: @tasks
  end
end
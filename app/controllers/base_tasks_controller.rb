class BaseTasksController < AuthorizedResourceController
  private
  def task_params
    params.require(:task).permit(:description, :status, :status_id, :due_date, :completed_date, :user, :user_id)
  end
end
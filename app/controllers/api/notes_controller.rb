class Api::NotesController < AuthorizedResourceController
  before_action :set_note, only: %i[ update destroy ]

  # POST /notes
  def create
    @note = Note.new(note_params)
    if authorize_note && @note.save 
      render json: @note, status: :created
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1
  def update
    if authorize_note && @note.update(note_params) 
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1
  def destroy
    @note.destroy if authorize_note
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    def authorize_note
      @note.task.user == @user
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:contents, :task_id, :complete)
    end
end

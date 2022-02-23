require "test_helper"

class NotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @note = notes(:one)
  end

  test "should get index" do
    get notes_url, as: :json
    assert_response :success
  end

  test "should create note" do
    assert_difference("Note.count") do
      post notes_url, params: { note: { complete: @note.complete, contents: @note.contents, task_id: @note.task_id } }, as: :json
    end

    assert_response :created
  end

  # test "should show note" do
  #   get note_url(@note), as: :json
  #   assert_response :success
  # end

  test "should update note" do
    patch note_url(@note), params: { note: { complete: @note.complete, contents: @note.contents, task_id: @note.task_id } }, as: :json
    assert_response :success
  end

  test "should destroy note" do
    assert_difference("Note.count", -1) do
      delete note_url(@note), as: :json
    end

    assert_response :no_content
  end
end

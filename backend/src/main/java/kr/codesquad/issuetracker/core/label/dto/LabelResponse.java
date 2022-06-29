package kr.codesquad.issuetracker.core.label.dto;

import kr.codesquad.issuetracker.core.label.Label;

public class LabelResponse {

    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String textColor;

    public LabelResponse(Long id, String title, String description, String backgroundColor, String textColor) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    public static LabelResponse from(Label label) {
        return new LabelResponse(label.getId(), label.getTitle(), label.getDescription(),
            label.getBackgroundColor(), label.getTextColor());
    }

}

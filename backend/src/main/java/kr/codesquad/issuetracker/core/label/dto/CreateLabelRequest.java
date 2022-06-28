package kr.codesquad.issuetracker.core.label.dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import org.springframework.lang.Nullable;

@Getter
public class CreateLabelRequest {

    @NotBlank(message = "레이블 이름은 공백을 입력할 수 없습니다.")
    private String title;
    @Nullable
    private String description;
    @NotBlank(message = "배경색은 공백을 입력할 수 없습니다.")
    private String backgroundColor;
    @NotBlank(message = "텍스트 컬러는 공백을 입력할 수 없습니다.")
    private String textColor;

    public CreateLabelRequest(String title, @Nullable String description, String backgroundColor, String textColor) {
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }
}

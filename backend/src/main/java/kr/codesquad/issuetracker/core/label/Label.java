package kr.codesquad.issuetracker.core.label;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import kr.codesquad.issuetracker.core.issue.Issue;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String textColor;
    @ManyToOne
    private Issue issue;

    public Label(String backgroundColor, String textColor, String title, String description) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.title = title;
        this.description = description;
    }
}

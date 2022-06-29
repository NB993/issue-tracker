package kr.codesquad.issuetracker.core.issue;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import kr.codesquad.issuetracker.common.BaseTimeEntity;
import kr.codesquad.issuetracker.core.label.Label;
import kr.codesquad.issuetracker.core.milestone.Milestone;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(name = "open_yn", columnDefinition="bit default 1")
    private boolean isOpen;
    @ManyToOne
    private Milestone milestone;
    @OneToMany(mappedBy = "issue")
    private List<Label> labels;
    @OneToMany(mappedBy = "issue")
    private List<Assignee> assignees;
    @OneToMany(mappedBy = "issue")
    private List<Comment> comments;

    public Issue(String title, Milestone milestone, List<Label> labels, List<Assignee> assignees, List<Comment> comments) {
        this.title = title;
        this.milestone = milestone;
        this.labels = labels;
        this.assignees = assignees;
        this.comments = comments;
    }
}

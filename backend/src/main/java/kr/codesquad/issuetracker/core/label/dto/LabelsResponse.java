package kr.codesquad.issuetracker.core.label.dto;

import java.util.List;
import kr.codesquad.issuetracker.core.label.Label;
import lombok.Getter;

@Getter
public class LabelsResponse {

    private Integer count;
    private List<LabelResponse> labels;

    public LabelsResponse(Integer count, List<LabelResponse> labels) {
        this.count = count;
        this.labels = labels;
    }
}

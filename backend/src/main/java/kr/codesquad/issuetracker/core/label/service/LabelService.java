package kr.codesquad.issuetracker.core.label.service;

import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.issuetracker.core.label.Label;
import kr.codesquad.issuetracker.core.label.dto.CreateLabelRequest;
import kr.codesquad.issuetracker.core.label.dto.LabelResponse;
import kr.codesquad.issuetracker.core.label.dto.LabelsResponse;
import kr.codesquad.issuetracker.core.label.repository.LabelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository labelRepository;

    public void createLabel(CreateLabelRequest createLabelRequest) {
        Label label = new Label(createLabelRequest.getTitle(), createLabelRequest.getDescription(),
            createLabelRequest.getBackgroundColor(), createLabelRequest.getTextColor());
        labelRepository.save(label);
    }

    public LabelsResponse getLabels() {
        List<Label> labels = labelRepository.findAll();
        List<LabelResponse> labelsResponse = labels.stream()
            .map(LabelResponse::from)
            .collect(Collectors.toList());

        return new LabelsResponse(labelsResponse.size(), labelsResponse);
    }
}

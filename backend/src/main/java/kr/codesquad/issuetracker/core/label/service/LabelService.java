package kr.codesquad.issuetracker.core.label.service;

import kr.codesquad.issuetracker.core.label.Label;
import kr.codesquad.issuetracker.core.label.dto.CreateLabelRequest;
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
}
